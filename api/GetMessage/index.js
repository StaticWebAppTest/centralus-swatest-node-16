module.exports = async function (context, req) {
  const date = "2023-06-20T14:08:06.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

