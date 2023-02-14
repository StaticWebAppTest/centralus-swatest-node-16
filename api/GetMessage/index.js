module.exports = async function (context, req) {
  const date = "2023-02-14T23:09:54.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

