module.exports = async function (context, req) {
  const date = "2022-12-31T04:11:18.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

