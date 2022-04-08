module.exports = async function (context, req) {
  const date = "2022-04-08T14:13:47.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

