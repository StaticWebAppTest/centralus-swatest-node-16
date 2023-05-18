module.exports = async function (context, req) {
  const date = "2023-05-18T10:09:06.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

