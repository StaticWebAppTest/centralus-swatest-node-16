module.exports = async function (context, req) {
  const date = "2022-06-17T00:53:58.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

