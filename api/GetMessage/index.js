module.exports = async function (context, req) {
  const date = "2023-07-31T21:07:37.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

