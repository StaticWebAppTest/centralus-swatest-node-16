module.exports = async function (context, req) {
  const date = "2024-04-22T08:13:17.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

