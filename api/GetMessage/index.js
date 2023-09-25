module.exports = async function (context, req) {
  const date = "2023-09-25T13:12:10.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

