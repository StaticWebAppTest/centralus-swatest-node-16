module.exports = async function (context, req) {
  const date = "2024-11-25T15:12:59.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

