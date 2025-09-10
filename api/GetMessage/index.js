module.exports = async function (context, req) {
  const date = "2025-09-10T16:15:52.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

