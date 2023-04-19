module.exports = async function (context, req) {
  const date = "2023-04-19T15:09:31.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

