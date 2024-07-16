module.exports = async function (context, req) {
  const date = "2024-07-16T04:13:14.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

