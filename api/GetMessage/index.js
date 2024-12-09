module.exports = async function (context, req) {
  const date = "2024-12-09T18:17:57.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

