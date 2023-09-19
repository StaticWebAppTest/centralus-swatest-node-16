module.exports = async function (context, req) {
  const date = "2023-09-19T10:09:36.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

