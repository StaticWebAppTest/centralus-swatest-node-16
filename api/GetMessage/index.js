module.exports = async function (context, req) {
  const date = "2023-06-02T23:09:14.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

