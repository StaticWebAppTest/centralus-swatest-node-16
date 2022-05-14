module.exports = async function (context, req) {
  const date = "2022-05-14T22:11:23.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

