module.exports = async function (context, req) {
  const date = "2024-07-05T05:10:05.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

