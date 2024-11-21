module.exports = async function (context, req) {
  const date = "2024-11-21T16:15:16.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

