module.exports = async function (context, req) {
  const date = "2023-12-21T11:07:46.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

