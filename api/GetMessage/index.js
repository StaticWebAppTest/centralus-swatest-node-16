module.exports = async function (context, req) {
  const date = "2023-12-24T11:06:58.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

