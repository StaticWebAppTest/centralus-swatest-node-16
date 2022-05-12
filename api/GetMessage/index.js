module.exports = async function (context, req) {
  const date = "2022-05-12T02:51:20.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

