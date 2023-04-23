module.exports = async function (context, req) {
  const date = "2023-04-23T20:08:58.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

