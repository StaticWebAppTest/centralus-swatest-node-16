module.exports = async function (context, req) {
  const date = "2024-10-09T12:21:58.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

