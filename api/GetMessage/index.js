module.exports = async function (context, req) {
  const date = "2023-06-19T18:11:22.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

