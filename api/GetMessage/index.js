module.exports = async function (context, req) {
  const date = "2023-07-05T23:10:02.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

