module.exports = async function (context, req) {
  const date = "2022-05-18T16:15:21.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

