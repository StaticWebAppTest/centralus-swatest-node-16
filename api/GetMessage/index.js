module.exports = async function (context, req) {
  const date = "2024-02-21T20:09:24.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

