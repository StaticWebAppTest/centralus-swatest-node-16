module.exports = async function (context, req) {
  const date = "2022-04-30T18:12:53.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

