module.exports = async function (context, req) {
  const date = "2022-04-27T21:14:35.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

