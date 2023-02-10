module.exports = async function (context, req) {
  const date = "2023-02-10T13:18:22.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

