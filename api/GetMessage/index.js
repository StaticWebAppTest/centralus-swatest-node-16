module.exports = async function (context, req) {
  const date = "2023-12-31T07:08:04.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

