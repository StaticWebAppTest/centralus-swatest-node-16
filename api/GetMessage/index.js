module.exports = async function (context, req) {
  const date = "2023-12-09T09:08:16.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

