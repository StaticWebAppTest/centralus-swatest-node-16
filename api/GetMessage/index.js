module.exports = async function (context, req) {
  const date = "2024-02-13T23:08:24.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

