module.exports = async function (context, req) {
  const date = "2024-01-28T04:11:20.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

