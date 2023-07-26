module.exports = async function (context, req) {
  const date = "2023-07-26T09:08:28.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

