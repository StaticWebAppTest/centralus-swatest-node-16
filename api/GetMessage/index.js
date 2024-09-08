module.exports = async function (context, req) {
  const date = "2024-09-08T15:10:48.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

