module.exports = async function (context, req) {
  const date = "2023-02-15T04:12:28.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

