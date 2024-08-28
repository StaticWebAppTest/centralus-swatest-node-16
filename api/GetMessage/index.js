module.exports = async function (context, req) {
  const date = "2024-08-28T05:11:16.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

