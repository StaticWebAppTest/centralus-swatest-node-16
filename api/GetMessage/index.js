module.exports = async function (context, req) {
  const date = "2024-06-04T18:13:15.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

