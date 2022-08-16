module.exports = async function (context, req) {
  const date = "2022-08-16T09:09:58.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

