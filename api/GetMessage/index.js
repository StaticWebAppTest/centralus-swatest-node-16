module.exports = async function (context, req) {
  const date = "2024-04-20T16:11:23.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

