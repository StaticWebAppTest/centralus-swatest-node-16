module.exports = async function (context, req) {
  const date = "2023-06-22T13:11:22.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

