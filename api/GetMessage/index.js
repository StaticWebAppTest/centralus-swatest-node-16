module.exports = async function (context, req) {
  const date = "2022-09-07T17:25:55.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

