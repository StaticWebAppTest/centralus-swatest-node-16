module.exports = async function (context, req) {
  const date = "2023-05-13T10:08:14.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

