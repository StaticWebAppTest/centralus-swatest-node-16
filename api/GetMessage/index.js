module.exports = async function (context, req) {
  const date = "2022-08-18T03:55:37.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

