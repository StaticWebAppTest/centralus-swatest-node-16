module.exports = async function (context, req) {
  const date = "2024-06-07T12:19:56.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

