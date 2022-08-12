module.exports = async function (context, req) {
  const date = "2022-08-12T03:04:52.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

