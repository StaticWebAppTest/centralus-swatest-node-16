module.exports = async function (context, req) {
  const date = "2023-06-14T00:53:26.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

