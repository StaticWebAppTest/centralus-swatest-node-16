module.exports = async function (context, req) {
  const date = "2023-08-10T08:11:47.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

