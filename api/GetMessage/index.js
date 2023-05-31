module.exports = async function (context, req) {
  const date = "2023-05-31T15:09:01.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

