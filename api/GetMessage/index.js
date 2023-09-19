module.exports = async function (context, req) {
  const date = "2023-09-19T07:08:34.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

