module.exports = async function (context, req) {
  const date = "2023-11-26T23:08:40.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

