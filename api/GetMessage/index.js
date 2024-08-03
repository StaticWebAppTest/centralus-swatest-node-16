module.exports = async function (context, req) {
  const date = "2024-08-03T09:10:55.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

