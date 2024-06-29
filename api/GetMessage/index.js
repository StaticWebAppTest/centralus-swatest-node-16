module.exports = async function (context, req) {
  const date = "2024-06-29T23:10:23.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

