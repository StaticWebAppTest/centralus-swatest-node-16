module.exports = async function (context, req) {
  const date = "2024-09-21T18:14:05.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

