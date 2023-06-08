module.exports = async function (context, req) {
  const date = "2023-06-08T12:16:44.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

