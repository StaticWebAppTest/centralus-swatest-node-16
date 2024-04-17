module.exports = async function (context, req) {
  const date = "2024-04-17T16:12:16.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

