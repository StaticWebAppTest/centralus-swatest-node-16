module.exports = async function (context, req) {
  const date = "2022-11-24T14:09:12.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

