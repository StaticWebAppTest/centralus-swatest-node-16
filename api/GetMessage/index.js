module.exports = async function (context, req) {
  const date = "2023-10-22T13:08:42.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

