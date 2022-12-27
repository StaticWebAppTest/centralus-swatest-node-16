module.exports = async function (context, req) {
  const date = "2022-12-27T16:12:22.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

