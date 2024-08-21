module.exports = async function (context, req) {
  const date = "2024-08-21T16:14:07.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

