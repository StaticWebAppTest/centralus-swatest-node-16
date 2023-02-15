module.exports = async function (context, req) {
  const date = "2023-02-15T23:10:04.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

