module.exports = async function (context, req) {
  const date = "2023-02-16T10:10:51.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

