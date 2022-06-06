module.exports = async function (context, req) {
  const date = "2022-06-06T05:12:42.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

