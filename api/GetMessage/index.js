module.exports = async function (context, req) {
  const date = "2024-03-30T20:08:40.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

