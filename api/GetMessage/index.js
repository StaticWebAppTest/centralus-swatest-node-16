module.exports = async function (context, req) {
  const date = "2023-02-21T02:20:15.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

