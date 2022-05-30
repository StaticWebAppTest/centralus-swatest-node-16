module.exports = async function (context, req) {
  const date = "2022-05-30T09:13:23.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

