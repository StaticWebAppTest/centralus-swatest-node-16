module.exports = async function (context, req) {
  const date = "2023-10-05T16:11:48.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

