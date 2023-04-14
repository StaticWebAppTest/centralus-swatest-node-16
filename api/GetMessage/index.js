module.exports = async function (context, req) {
  const date = "2023-04-14T19:07:15.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

