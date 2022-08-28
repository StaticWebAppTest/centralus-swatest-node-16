module.exports = async function (context, req) {
  const date = "2022-08-28T07:10:10.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

