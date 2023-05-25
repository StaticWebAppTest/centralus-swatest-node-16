module.exports = async function (context, req) {
  const date = "2023-05-25T17:07:51.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

