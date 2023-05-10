module.exports = async function (context, req) {
  const date = "2023-05-10T12:17:02.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

