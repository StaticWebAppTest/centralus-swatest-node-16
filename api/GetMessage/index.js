module.exports = async function (context, req) {
  const date = "2023-02-05T00:56:08.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

