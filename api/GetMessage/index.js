module.exports = async function (context, req) {
  const date = "2023-04-21T15:08:54.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

