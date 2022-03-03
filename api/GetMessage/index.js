module.exports = async function (context, req) {
  const date = "2022-03-03T03:12:35.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

