module.exports = async function (context, req) {
  const date = "2022-06-21T00:57:36.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

