module.exports = async function (context, req) {
  const date = "2025-05-04T16:14:23.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

