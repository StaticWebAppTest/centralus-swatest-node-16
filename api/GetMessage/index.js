module.exports = async function (context, req) {
  const date = "2022-05-27T00:56:18.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

