module.exports = async function (context, req) {
  const date = "2023-03-03T19:08:05.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

