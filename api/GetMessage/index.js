module.exports = async function (context, req) {
  const date = "2022-05-06T22:10:32.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

