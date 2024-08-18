module.exports = async function (context, req) {
  const date = "2024-08-18T18:12:57.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

