module.exports = async function (context, req) {
  const date = "2024-02-14T23:09:13.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

