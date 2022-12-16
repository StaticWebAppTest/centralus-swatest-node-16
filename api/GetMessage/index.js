module.exports = async function (context, req) {
  const date = "2022-12-16T05:08:39.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

