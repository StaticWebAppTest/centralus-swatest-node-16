module.exports = async function (context, req) {
  const date = "2023-01-17T02:12:26.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

