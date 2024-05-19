module.exports = async function (context, req) {
  const date = "2024-05-19T08:11:31.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

