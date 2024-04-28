module.exports = async function (context, req) {
  const date = "2024-04-28T07:08:25.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

