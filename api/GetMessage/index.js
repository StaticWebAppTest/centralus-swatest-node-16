module.exports = async function (context, req) {
  const date = "2023-03-05T23:09:20.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

