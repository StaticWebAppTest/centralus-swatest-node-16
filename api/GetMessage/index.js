module.exports = async function (context, req) {
  const date = "2023-07-15T23:09:01.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

