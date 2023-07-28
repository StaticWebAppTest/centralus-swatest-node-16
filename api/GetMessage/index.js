module.exports = async function (context, req) {
  const date = "2023-07-28T20:08:45.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

