module.exports = async function (context, req) {
  const date = "2025-01-03T15:11:55.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

