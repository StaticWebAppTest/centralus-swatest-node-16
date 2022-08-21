module.exports = async function (context, req) {
  const date = "2022-08-21T21:09:41.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

