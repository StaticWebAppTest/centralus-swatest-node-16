module.exports = async function (context, req) {
  const date = "2023-07-28T19:06:58.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

