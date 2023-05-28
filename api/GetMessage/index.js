module.exports = async function (context, req) {
  const date = "2023-05-28T16:09:50.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

