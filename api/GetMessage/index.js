module.exports = async function (context, req) {
  const date = "2024-06-23T20:10:36.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

