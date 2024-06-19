module.exports = async function (context, req) {
  const date = "2024-06-19T18:12:12.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

