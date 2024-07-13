module.exports = async function (context, req) {
  const date = "2024-07-13T16:10:58.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

