module.exports = async function (context, req) {
  const date = "2022-08-17T14:15:59.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

