module.exports = async function (context, req) {
  const date = "2024-07-21T10:09:43.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

