module.exports = async function (context, req) {
  const date = "2022-07-18T15:12:24.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

