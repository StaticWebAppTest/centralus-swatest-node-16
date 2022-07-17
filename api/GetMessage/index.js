module.exports = async function (context, req) {
  const date = "2022-07-17T16:13:17.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

