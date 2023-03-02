module.exports = async function (context, req) {
  const date = "2023-03-02T03:19:10.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

