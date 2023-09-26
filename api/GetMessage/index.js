module.exports = async function (context, req) {
  const date = "2023-09-26T23:08:15.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

