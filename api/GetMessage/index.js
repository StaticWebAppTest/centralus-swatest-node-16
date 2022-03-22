module.exports = async function (context, req) {
  const date = "2022-03-22T14:09:23.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

