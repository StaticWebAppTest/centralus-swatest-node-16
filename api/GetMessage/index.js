module.exports = async function (context, req) {
  const date = "2023-05-31T03:13:08.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

