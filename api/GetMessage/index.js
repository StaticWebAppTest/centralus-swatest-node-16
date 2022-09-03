module.exports = async function (context, req) {
  const date = "2022-09-03T19:09:14.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

