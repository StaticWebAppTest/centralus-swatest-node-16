module.exports = async function (context, req) {
  const date = "2023-02-12T14:08:05.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

