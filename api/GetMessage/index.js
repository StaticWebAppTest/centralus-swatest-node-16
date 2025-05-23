module.exports = async function (context, req) {
  const date = "2025-05-23T14:13:00.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

