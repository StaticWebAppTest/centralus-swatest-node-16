module.exports = async function (context, req) {
  const date = "2023-08-21T02:13:07.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

