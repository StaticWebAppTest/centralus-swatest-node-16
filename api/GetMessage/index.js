module.exports = async function (context, req) {
  const date = "2023-10-04T00:41:25.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

