module.exports = async function (context, req) {
  const date = "2024-03-18T08:11:58.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

