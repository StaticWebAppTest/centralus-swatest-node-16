module.exports = async function (context, req) {
  const date = "2024-07-12T04:12:20.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

