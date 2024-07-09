module.exports = async function (context, req) {
  const date = "2024-07-09T09:10:50.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

