module.exports = async function (context, req) {
  const date = "2023-03-14T03:10:56.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

