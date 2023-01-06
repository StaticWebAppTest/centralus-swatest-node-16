module.exports = async function (context, req) {
  const date = "2023-01-06T04:11:30.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

