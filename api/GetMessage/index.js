module.exports = async function (context, req) {
  const date = "2023-08-31T02:14:56.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

