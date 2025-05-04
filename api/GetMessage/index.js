module.exports = async function (context, req) {
  const date = "2025-05-04T15:12:19.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

