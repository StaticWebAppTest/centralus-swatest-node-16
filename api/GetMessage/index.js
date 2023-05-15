module.exports = async function (context, req) {
  const date = "2023-05-15T21:07:35.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

