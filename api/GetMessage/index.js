module.exports = async function (context, req) {
  const date = "2022-06-04T06:12:13.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

