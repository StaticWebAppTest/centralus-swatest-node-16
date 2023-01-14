module.exports = async function (context, req) {
  const date = "2023-01-14T15:08:40.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

