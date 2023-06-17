module.exports = async function (context, req) {
  const date = "2023-06-17T09:08:26.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

