module.exports = async function (context, req) {
  const date = "2024-04-06T18:10:43.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

