module.exports = async function (context, req) {
  const date = "2025-02-04T05:11:38.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

