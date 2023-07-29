module.exports = async function (context, req) {
  const date = "2023-07-29T07:07:37.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

