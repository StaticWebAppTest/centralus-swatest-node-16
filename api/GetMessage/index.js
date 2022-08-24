module.exports = async function (context, req) {
  const date = "2022-08-24T14:10:22.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

