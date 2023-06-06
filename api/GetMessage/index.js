module.exports = async function (context, req) {
  const date = "2023-06-06T04:10:27.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

