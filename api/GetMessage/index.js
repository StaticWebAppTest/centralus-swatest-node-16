module.exports = async function (context, req) {
  const date = "2024-08-07T16:13:01.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

