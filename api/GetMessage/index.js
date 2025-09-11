module.exports = async function (context, req) {
  const date = "2025-09-11T10:13:12.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

