module.exports = async function (context, req) {
  const date = "2023-05-26T17:08:40.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

