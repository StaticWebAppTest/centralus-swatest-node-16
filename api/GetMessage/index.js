module.exports = async function (context, req) {
  const date = "2025-05-04T03:12:19.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

