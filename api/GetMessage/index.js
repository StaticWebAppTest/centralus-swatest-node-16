module.exports = async function (context, req) {
  const date = "2024-03-13T11:09:29.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

