module.exports = async function (context, req) {
  const date = "2022-06-07T10:11:39.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

