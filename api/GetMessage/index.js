module.exports = async function (context, req) {
  const date = "2023-01-03T16:13:08.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

