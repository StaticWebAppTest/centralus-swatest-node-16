module.exports = async function (context, req) {
  const date = "2023-10-22T20:08:14.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

