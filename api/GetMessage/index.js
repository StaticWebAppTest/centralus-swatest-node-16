module.exports = async function (context, req) {
  const date = "2023-03-27T23:09:44.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

