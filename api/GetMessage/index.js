module.exports = async function (context, req) {
  const date = "2024-08-09T13:14:33.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

