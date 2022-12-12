module.exports = async function (context, req) {
  const date = "2022-12-12T02:17:41.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

