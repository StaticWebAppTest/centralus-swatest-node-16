module.exports = async function (context, req) {
  const date = "2023-02-19T23:09:24.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

