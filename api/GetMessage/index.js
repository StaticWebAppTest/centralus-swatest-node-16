module.exports = async function (context, req) {
  const date = "2022-05-07T22:10:02.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

