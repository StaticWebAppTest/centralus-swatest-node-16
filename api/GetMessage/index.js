module.exports = async function (context, req) {
  const date = "2023-04-16T02:06:03.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

