module.exports = async function (context, req) {
  const date = "2024-04-07T18:10:52.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

