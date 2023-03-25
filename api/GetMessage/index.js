module.exports = async function (context, req) {
  const date = "2023-03-25T17:07:29.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

