module.exports = async function (context, req) {
  const date = "2024-12-26T18:15:40.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

