module.exports = async function (context, req) {
  const date = "2024-05-13T01:53:54.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

