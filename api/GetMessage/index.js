module.exports = async function (context, req) {
  const date = "2022-07-17T23:09:59.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

