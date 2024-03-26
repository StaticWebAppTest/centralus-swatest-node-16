module.exports = async function (context, req) {
  const date = "2024-03-26T10:10:55.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

