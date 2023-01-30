module.exports = async function (context, req) {
  const date = "2023-01-30T13:19:48.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

