module.exports = async function (context, req) {
  const date = "2023-02-22T08:13:18.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

