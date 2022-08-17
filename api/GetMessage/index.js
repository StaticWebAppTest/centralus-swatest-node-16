module.exports = async function (context, req) {
  const date = "2022-08-17T09:11:58.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

