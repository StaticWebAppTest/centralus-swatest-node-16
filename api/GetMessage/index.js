module.exports = async function (context, req) {
  const date = "2025-05-04T08:15:27.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

