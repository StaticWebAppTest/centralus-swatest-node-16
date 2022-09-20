module.exports = async function (context, req) {
  const date = "2022-09-20T19:11:31.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

