module.exports = async function (context, req) {
  const date = "2023-11-05T23:08:15.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

