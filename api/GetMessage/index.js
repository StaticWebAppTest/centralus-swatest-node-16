module.exports = async function (context, req) {
  const date = "2023-05-29T00:51:17.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

