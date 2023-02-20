module.exports = async function (context, req) {
  const date = "2023-02-20T02:21:09.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

