module.exports = async function (context, req) {
  const date = "2024-10-23T10:12:26.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

