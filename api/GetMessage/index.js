module.exports = async function (context, req) {
  const date = "2024-04-26T23:09:50.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

