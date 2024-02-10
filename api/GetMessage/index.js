module.exports = async function (context, req) {
  const date = "2024-02-10T07:08:24.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

