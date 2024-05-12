module.exports = async function (context, req) {
  const date = "2024-05-12T07:08:05.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

