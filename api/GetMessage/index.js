module.exports = async function (context, req) {
  const date = "2024-07-09T02:35:05.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

