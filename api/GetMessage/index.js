module.exports = async function (context, req) {
  const date = "2022-05-31T14:21:19.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

