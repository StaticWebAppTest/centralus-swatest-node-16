module.exports = async function (context, req) {
  const date = "2022-11-27T21:08:39.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

