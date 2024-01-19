module.exports = async function (context, req) {
  const date = "2024-01-19T09:09:35.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

