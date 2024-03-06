module.exports = async function (context, req) {
  const date = "2024-03-06T16:11:01.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

