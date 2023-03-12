module.exports = async function (context, req) {
  const date = "2023-03-12T20:09:29.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

