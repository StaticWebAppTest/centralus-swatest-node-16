module.exports = async function (context, req) {
  const date = "2022-12-23T06:12:29.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

