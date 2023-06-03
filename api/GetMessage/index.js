module.exports = async function (context, req) {
  const date = "2023-06-03T14:06:50.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

