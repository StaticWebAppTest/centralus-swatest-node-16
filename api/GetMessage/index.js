module.exports = async function (context, req) {
  const date = "2024-03-21T13:11:10.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

