module.exports = async function (context, req) {
  const date = "2022-06-23T05:16:20.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

