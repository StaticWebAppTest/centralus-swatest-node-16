module.exports = async function (context, req) {
  const date = "2025-12-28T23:13:27.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

