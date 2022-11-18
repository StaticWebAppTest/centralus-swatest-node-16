module.exports = async function (context, req) {
  const date = "2022-11-18T18:13:23.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

