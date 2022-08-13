module.exports = async function (context, req) {
  const date = "2022-08-13T02:53:49.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

