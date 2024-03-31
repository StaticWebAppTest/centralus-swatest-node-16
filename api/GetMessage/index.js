module.exports = async function (context, req) {
  const date = "2024-03-31T10:09:23.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

