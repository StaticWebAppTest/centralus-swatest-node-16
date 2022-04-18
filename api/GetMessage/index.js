module.exports = async function (context, req) {
  const date = "2022-04-18T13:23:13.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

