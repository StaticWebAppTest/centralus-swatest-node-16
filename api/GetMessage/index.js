module.exports = async function (context, req) {
  const date = "2024-07-12T13:13:18.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

