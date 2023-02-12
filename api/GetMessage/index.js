module.exports = async function (context, req) {
  const date = "2023-02-12T10:09:28.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

