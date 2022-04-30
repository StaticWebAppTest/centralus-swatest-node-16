module.exports = async function (context, req) {
  const date = "2022-04-30T06:13:21.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

