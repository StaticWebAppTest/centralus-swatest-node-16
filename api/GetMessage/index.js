module.exports = async function (context, req) {
  const date = "2023-09-27T14:08:16.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

