module.exports = async function (context, req) {
  const date = "2024-08-07T08:14:22.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

