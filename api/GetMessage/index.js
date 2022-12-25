module.exports = async function (context, req) {
  const date = "2022-12-25T18:10:40.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

