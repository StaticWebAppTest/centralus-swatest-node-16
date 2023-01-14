module.exports = async function (context, req) {
  const date = "2023-01-14T13:12:09.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

