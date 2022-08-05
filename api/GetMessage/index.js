module.exports = async function (context, req) {
  const date = "2022-08-05T03:38:14.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

