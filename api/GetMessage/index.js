module.exports = async function (context, req) {
  const date = "2023-11-05T20:08:54.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

