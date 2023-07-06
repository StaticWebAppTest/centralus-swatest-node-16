module.exports = async function (context, req) {
  const date = "2023-07-06T07:10:13.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

