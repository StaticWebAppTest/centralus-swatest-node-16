module.exports = async function (context, req) {
  const date = "2024-08-07T17:11:31.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

