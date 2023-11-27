module.exports = async function (context, req) {
  const date = "2023-11-27T17:08:49.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

