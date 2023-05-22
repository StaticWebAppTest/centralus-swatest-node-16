module.exports = async function (context, req) {
  const date = "2023-05-22T21:07:44.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

