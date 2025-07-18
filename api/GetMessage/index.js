module.exports = async function (context, req) {
  const date = "2025-07-18T04:33:52.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

