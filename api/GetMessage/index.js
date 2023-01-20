module.exports = async function (context, req) {
  const date = "2023-01-20T20:10:19.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

