module.exports = async function (context, req) {
  const date = "2023-03-10T16:13:33.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

