module.exports = async function (context, req) {
  const date = "2024-12-20T14:10:57.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

