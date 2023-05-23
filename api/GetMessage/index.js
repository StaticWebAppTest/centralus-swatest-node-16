module.exports = async function (context, req) {
  const date = "2023-05-23T00:48:37.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

