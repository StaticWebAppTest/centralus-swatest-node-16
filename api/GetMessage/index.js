module.exports = async function (context, req) {
  const date = "2023-04-21T10:09:21.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

