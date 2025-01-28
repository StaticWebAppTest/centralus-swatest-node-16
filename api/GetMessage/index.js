module.exports = async function (context, req) {
  const date = "2025-01-28T02:10:10.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

