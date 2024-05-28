module.exports = async function (context, req) {
  const date = "2024-05-28T16:11:55.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

