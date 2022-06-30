module.exports = async function (context, req) {
  const date = "2022-06-30T17:19:58.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

