module.exports = async function (context, req) {
  const date = "2022-05-21T11:09:17.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

