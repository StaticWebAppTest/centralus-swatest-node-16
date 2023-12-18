module.exports = async function (context, req) {
  const date = "2023-12-18T13:13:00.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

