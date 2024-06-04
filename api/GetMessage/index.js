module.exports = async function (context, req) {
  const date = "2024-06-04T16:13:08.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

