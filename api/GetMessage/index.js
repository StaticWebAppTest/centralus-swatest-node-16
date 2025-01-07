module.exports = async function (context, req) {
  const date = "2025-01-07T05:11:40.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

