module.exports = async function (context, req) {
  const date = "2024-06-25T03:11:27.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

