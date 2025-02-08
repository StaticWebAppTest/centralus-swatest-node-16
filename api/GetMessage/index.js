module.exports = async function (context, req) {
  const date = "2025-02-08T05:10:50.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

