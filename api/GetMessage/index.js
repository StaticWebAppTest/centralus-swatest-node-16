module.exports = async function (context, req) {
  const date = "2025-05-25T20:13:20.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

