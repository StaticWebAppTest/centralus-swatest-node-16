module.exports = async function (context, req) {
  const date = "2025-07-28T17:17:27.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

