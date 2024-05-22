module.exports = async function (context, req) {
  const date = "2024-05-22T06:13:45.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

