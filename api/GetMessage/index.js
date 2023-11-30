module.exports = async function (context, req) {
  const date = "2023-11-30T23:09:40.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

