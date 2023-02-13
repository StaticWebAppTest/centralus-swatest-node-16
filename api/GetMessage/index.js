module.exports = async function (context, req) {
  const date = "2023-02-13T07:09:43.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

