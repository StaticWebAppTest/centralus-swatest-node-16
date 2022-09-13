module.exports = async function (context, req) {
  const date = "2022-09-13T17:21:35.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

