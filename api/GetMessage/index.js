module.exports = async function (context, req) {
  const date = "2025-03-28T12:24:12.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

