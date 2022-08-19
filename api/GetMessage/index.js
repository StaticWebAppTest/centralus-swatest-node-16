module.exports = async function (context, req) {
  const date = "2022-08-19T14:11:06.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

