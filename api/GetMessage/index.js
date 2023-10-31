module.exports = async function (context, req) {
  const date = "2023-10-31T23:08:28.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

