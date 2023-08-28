module.exports = async function (context, req) {
  const date = "2023-08-28T10:09:43.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

