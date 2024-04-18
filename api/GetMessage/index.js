module.exports = async function (context, req) {
  const date = "2024-04-18T23:09:50.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

