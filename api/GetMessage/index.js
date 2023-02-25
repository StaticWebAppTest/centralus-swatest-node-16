module.exports = async function (context, req) {
  const date = "2023-02-25T21:08:19.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

