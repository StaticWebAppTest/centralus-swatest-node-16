module.exports = async function (context, req) {
  const date = "2025-04-24T13:24:40.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

