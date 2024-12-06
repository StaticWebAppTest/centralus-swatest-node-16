module.exports = async function (context, req) {
  const date = "2024-12-06T14:11:49.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

