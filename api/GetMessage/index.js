module.exports = async function (context, req) {
  const date = "2024-08-23T12:19:55.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

