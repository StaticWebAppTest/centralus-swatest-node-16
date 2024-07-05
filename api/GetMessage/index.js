module.exports = async function (context, req) {
  const date = "2024-07-05T18:13:22.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

