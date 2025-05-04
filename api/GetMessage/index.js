module.exports = async function (context, req) {
  const date = "2025-05-04T14:10:55.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

