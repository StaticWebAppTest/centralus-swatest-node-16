module.exports = async function (context, req) {
  const date = "2024-08-04T16:11:21.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

