module.exports = async function (context, req) {
  const date = "2022-06-01T11:10:39.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

