module.exports = async function (context, req) {
  const date = "2022-10-26T23:13:10.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

