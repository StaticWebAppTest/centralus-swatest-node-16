module.exports = async function (context, req) {
  const date = "2022-05-21T22:10:13.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

