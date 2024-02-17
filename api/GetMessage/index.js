module.exports = async function (context, req) {
  const date = "2024-02-17T04:12:16.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

