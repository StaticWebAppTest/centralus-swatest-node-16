module.exports = async function (context, req) {
  const date = "2022-08-27T08:13:54.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

