module.exports = async function (context, req) {
  const date = "2022-04-21T07:10:20.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

