module.exports = async function (context, req) {
  const date = "2024-06-10T03:11:37.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

