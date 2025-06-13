module.exports = async function (context, req) {
  const date = "2025-06-13T07:13:22.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

