module.exports = async function (context, req) {
  const date = "2022-12-27T21:08:22.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

