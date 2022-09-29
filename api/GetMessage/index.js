module.exports = async function (context, req) {
  const date = "2022-09-29T21:12:05.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

