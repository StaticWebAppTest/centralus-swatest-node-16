module.exports = async function (context, req) {
  const date = "2024-11-23T15:10:58.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

