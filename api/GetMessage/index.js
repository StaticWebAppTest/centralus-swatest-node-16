module.exports = async function (context, req) {
  const date = "2023-10-05T03:08:56.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

