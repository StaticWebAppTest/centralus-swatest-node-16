module.exports = async function (context, req) {
  const date = "2022-05-31T15:15:06.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

