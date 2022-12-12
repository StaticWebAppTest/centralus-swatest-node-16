module.exports = async function (context, req) {
  const date = "2022-12-12T19:11:14.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

