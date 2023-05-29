module.exports = async function (context, req) {
  const date = "2023-05-29T11:07:12.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

