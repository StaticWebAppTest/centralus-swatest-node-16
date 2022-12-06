module.exports = async function (context, req) {
  const date = "2022-12-06T09:09:34.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

