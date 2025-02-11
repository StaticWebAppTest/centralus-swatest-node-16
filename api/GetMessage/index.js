module.exports = async function (context, req) {
  const date = "2025-02-11T19:08:23.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

