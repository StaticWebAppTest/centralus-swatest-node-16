module.exports = async function (context, req) {
  const date = "2022-07-26T09:10:43.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

