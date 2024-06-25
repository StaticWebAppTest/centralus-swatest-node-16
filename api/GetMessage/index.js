module.exports = async function (context, req) {
  const date = "2024-06-25T00:47:35.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

