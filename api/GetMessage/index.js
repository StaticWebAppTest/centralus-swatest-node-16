module.exports = async function (context, req) {
  const date = "2023-07-31T16:12:01.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

