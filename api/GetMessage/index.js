module.exports = async function (context, req) {
  const date = "2023-02-21T21:09:03.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

