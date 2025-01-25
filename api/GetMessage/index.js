module.exports = async function (context, req) {
  const date = "2025-01-25T06:14:39.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

