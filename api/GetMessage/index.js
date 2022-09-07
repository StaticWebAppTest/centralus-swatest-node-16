module.exports = async function (context, req) {
  const date = "2022-09-07T19:09:48.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

