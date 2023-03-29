module.exports = async function (context, req) {
  const date = "2023-03-29T19:08:00.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

