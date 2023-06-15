module.exports = async function (context, req) {
  const date = "2023-06-15T11:07:27.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

