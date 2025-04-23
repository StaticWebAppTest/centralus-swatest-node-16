module.exports = async function (context, req) {
  const date = "2025-04-23T07:17:08.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

