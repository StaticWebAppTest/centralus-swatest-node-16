module.exports = async function (context, req) {
  const date = "2024-07-05T14:10:28.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

