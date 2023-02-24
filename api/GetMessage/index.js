module.exports = async function (context, req) {
  const date = "2023-02-24T03:13:44.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

