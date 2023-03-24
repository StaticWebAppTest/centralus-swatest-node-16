module.exports = async function (context, req) {
  const date = "2023-03-24T02:04:09.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

