module.exports = async function (context, req) {
  const date = "2024-03-01T11:07:38.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

