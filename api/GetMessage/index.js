module.exports = async function (context, req) {
  const date = "2024-06-01T06:13:05.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

