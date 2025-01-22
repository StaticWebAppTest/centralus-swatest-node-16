module.exports = async function (context, req) {
  const date = "2025-01-22T07:11:18.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

