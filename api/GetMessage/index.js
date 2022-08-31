module.exports = async function (context, req) {
  const date = "2022-08-31T04:25:32.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

