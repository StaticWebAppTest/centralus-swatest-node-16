module.exports = async function (context, req) {
  const date = "2022-11-05T10:12:32.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

