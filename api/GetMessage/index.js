module.exports = async function (context, req) {
  const date = "2023-10-16T15:09:49.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

