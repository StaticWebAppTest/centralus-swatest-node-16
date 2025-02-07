module.exports = async function (context, req) {
  const date = "2025-02-07T17:10:03.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

