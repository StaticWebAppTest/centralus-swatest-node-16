module.exports = async function (context, req) {
  const date = "2023-04-24T08:12:21.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

