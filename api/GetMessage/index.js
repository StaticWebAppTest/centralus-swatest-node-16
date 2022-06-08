module.exports = async function (context, req) {
  const date = "2022-06-08T00:55:44.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

