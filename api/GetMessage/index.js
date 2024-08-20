module.exports = async function (context, req) {
  const date = "2024-08-20T05:10:16.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

