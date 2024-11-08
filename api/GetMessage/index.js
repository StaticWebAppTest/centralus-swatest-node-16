module.exports = async function (context, req) {
  const date = "2024-11-08T15:11:49.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

