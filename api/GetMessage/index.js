module.exports = async function (context, req) {
  const date = "2024-10-09T00:56:10.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

