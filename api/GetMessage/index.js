module.exports = async function (context, req) {
  const date = "2025-01-03T19:09:10.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

