module.exports = async function (context, req) {
  const date = "2023-06-28T20:10:27.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

