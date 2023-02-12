module.exports = async function (context, req) {
  const date = "2023-02-12T09:08:58.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

