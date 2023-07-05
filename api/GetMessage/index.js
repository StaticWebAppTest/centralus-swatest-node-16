module.exports = async function (context, req) {
  const date = "2023-07-05T10:11:24.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

