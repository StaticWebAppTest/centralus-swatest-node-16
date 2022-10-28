module.exports = async function (context, req) {
  const date = "2022-10-28T06:15:38.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

