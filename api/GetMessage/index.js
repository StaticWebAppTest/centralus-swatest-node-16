module.exports = async function (context, req) {
  const date = "2023-06-21T14:08:01.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

