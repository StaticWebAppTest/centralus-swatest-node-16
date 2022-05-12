module.exports = async function (context, req) {
  const date = "2022-05-12T00:56:47.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

