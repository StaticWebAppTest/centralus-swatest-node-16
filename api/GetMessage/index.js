module.exports = async function (context, req) {
  const date = "2022-10-08T14:15:29.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

