module.exports = async function (context, req) {
  const date = "2024-08-13T21:10:13.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

