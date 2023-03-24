module.exports = async function (context, req) {
  const date = "2023-03-24T07:08:17.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

