module.exports = async function (context, req) {
  const date = "2024-08-05T09:11:19.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

