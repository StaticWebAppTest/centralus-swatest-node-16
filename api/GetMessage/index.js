module.exports = async function (context, req) {
  const date = "2023-07-10T09:10:43.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

