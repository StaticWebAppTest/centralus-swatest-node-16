module.exports = async function (context, req) {
  const date = "2023-10-19T08:11:51.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

