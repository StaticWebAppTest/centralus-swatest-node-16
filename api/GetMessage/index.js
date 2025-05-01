module.exports = async function (context, req) {
  const date = "2025-05-01T20:13:08.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

