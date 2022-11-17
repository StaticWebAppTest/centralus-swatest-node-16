module.exports = async function (context, req) {
  const date = "2022-11-17T15:11:14.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

