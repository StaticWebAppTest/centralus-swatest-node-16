module.exports = async function (context, req) {
  const date = "2023-01-14T03:10:26.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

