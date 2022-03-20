module.exports = async function (context, req) {
  const date = "2022-03-20T05:08:56.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

