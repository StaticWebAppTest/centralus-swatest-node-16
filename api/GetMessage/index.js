module.exports = async function (context, req) {
  const date = "2022-03-03T12:22:58.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

