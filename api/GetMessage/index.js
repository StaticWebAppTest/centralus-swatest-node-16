module.exports = async function (context, req) {
  const date = "2025-02-24T06:17:52.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

