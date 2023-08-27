module.exports = async function (context, req) {
  const date = "2023-08-27T21:06:49.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

