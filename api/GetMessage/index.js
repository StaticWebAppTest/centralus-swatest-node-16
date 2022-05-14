module.exports = async function (context, req) {
  const date = "2022-05-14T03:57:18.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

