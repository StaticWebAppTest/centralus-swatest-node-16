module.exports = async function (context, req) {
  const date = "2023-10-26T12:16:03.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

