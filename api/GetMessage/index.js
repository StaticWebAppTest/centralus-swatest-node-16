module.exports = async function (context, req) {
  const date = "2024-07-06T05:10:22.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

