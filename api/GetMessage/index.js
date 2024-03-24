module.exports = async function (context, req) {
  const date = "2024-03-24T16:10:14.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

