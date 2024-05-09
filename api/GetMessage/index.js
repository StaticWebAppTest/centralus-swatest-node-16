module.exports = async function (context, req) {
  const date = "2024-05-09T20:09:46.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

