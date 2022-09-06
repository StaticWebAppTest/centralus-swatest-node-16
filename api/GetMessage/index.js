module.exports = async function (context, req) {
  const date = "2022-09-06T15:12:16.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

