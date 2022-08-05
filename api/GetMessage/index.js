module.exports = async function (context, req) {
  const date = "2022-08-05T14:11:59.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

