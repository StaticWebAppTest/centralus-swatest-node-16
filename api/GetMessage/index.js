module.exports = async function (context, req) {
  const date = "2024-01-31T03:09:45.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

