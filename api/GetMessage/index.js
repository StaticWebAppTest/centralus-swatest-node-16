module.exports = async function (context, req) {
  const date = "2022-09-08T22:12:05.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

