module.exports = async function (context, req) {
  const date = "2024-06-05T23:10:56.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

