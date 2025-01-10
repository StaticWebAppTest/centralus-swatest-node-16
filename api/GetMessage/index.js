module.exports = async function (context, req) {
  const date = "2025-01-10T04:14:30.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

