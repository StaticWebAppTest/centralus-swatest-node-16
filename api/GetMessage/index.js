module.exports = async function (context, req) {
  const date = "2023-12-28T03:09:49.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

