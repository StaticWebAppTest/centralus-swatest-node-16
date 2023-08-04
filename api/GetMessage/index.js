module.exports = async function (context, req) {
  const date = "2023-08-04T00:47:59.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

