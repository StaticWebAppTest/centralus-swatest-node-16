module.exports = async function (context, req) {
  const date = "2023-02-05T14:07:44.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

