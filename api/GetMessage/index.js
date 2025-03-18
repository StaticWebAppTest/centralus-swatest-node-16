module.exports = async function (context, req) {
  const date = "2025-03-18T15:13:52.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

