module.exports = async function (context, req) {
  const date = "2024-10-24T09:12:35.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

