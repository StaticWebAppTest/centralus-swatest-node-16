module.exports = async function (context, req) {
  const date = "2022-10-21T04:59:24.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

