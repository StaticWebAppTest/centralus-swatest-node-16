module.exports = async function (context, req) {
  const date = "2023-12-29T06:12:35.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

