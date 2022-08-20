module.exports = async function (context, req) {
  const date = "2022-08-20T21:10:01.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

