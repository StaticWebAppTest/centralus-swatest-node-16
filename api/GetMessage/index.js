module.exports = async function (context, req) {
  const date = "2023-06-10T23:08:05.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

