module.exports = async function (context, req) {
  const date = "2023-04-29T15:08:04.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

