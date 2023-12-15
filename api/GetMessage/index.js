module.exports = async function (context, req) {
  const date = "2023-12-15T10:10:17.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

