module.exports = async function (context, req) {
  const date = "2023-10-07T10:08:07.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

