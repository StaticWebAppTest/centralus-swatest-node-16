module.exports = async function (context, req) {
  const date = "2023-12-04T14:08:56.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

