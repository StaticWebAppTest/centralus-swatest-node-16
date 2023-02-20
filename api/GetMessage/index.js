module.exports = async function (context, req) {
  const date = "2023-02-20T03:15:56.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

