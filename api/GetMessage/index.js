module.exports = async function (context, req) {
  const date = "2023-08-17T10:08:30.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

