module.exports = async function (context, req) {
  const date = "2023-04-21T08:11:26.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

