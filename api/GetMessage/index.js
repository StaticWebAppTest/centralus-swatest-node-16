module.exports = async function (context, req) {
  const date = "2023-01-19T13:18:51.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

