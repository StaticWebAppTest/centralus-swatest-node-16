module.exports = async function (context, req) {
  const date = "2023-03-15T07:09:07.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

