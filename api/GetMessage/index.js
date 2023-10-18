module.exports = async function (context, req) {
  const date = "2023-10-18T18:11:57.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

