module.exports = async function (context, req) {
  const date = "2022-03-17T05:09:34.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

