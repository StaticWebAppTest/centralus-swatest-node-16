module.exports = async function (context, req) {
  const date = "2023-03-18T19:07:06.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

