module.exports = async function (context, req) {
  const date = "2023-08-14T10:09:02.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

