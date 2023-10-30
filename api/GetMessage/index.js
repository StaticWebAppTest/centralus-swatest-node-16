module.exports = async function (context, req) {
  const date = "2023-10-30T19:06:51.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

