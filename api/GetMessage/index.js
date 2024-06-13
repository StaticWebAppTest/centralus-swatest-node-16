module.exports = async function (context, req) {
  const date = "2024-06-13T02:28:29.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

