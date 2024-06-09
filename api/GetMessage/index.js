module.exports = async function (context, req) {
  const date = "2024-06-09T09:10:39.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

