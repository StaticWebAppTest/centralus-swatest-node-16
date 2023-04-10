module.exports = async function (context, req) {
  const date = "2023-04-10T23:09:06.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

