module.exports = async function (context, req) {
  const date = "2022-02-23T06:12:13.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

