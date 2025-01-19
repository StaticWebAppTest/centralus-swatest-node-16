module.exports = async function (context, req) {
  const date = "2025-01-19T14:11:03.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

