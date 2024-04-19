module.exports = async function (context, req) {
  const date = "2024-04-19T21:08:54.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

