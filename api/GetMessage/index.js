module.exports = async function (context, req) {
  const date = "2023-07-24T17:08:05.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

