module.exports = async function (context, req) {
  const date = "2023-03-30T17:08:08.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

