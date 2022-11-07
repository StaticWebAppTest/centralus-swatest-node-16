module.exports = async function (context, req) {
  const date = "2022-11-07T07:11:28.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

