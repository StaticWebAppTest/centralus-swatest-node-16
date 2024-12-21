module.exports = async function (context, req) {
  const date = "2024-12-21T04:14:00.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

