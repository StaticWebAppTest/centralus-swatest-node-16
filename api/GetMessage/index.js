module.exports = async function (context, req) {
  const date = "2023-02-10T03:18:16.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

