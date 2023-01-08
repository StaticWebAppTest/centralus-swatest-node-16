module.exports = async function (context, req) {
  const date = "2023-01-08T14:07:40.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

