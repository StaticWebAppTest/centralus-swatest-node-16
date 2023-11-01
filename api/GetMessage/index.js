module.exports = async function (context, req) {
  const date = "2023-11-01T15:09:14.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

