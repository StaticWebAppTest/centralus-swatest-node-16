module.exports = async function (context, req) {
  const date = "2023-07-27T19:06:49.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

