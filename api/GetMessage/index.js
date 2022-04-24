module.exports = async function (context, req) {
  const date = "2022-04-24T05:09:34.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

