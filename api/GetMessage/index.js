module.exports = async function (context, req) {
  const date = "2023-01-04T13:17:11.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

