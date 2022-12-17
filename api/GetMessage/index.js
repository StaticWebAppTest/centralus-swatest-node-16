module.exports = async function (context, req) {
  const date = "2022-12-17T13:11:31.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

