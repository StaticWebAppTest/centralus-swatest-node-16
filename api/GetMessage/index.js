module.exports = async function (context, req) {
  const date = "2023-11-27T16:12:13.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

