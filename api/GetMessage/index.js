module.exports = async function (context, req) {
  const date = "2023-08-03T19:06:48.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

