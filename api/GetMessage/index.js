module.exports = async function (context, req) {
  const date = "2023-11-11T03:12:33.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

