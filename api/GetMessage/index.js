module.exports = async function (context, req) {
  const date = "2025-02-11T21:10:52.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

