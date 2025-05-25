module.exports = async function (context, req) {
  const date = "2025-05-25T05:12:33.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

