module.exports = async function (context, req) {
  const date = "2024-11-24T16:14:00.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

