module.exports = async function (context, req) {
  const date = "2022-07-14T18:13:26.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

