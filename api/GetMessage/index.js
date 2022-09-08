module.exports = async function (context, req) {
  const date = "2022-09-08T15:12:41.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

