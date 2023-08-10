module.exports = async function (context, req) {
  const date = "2023-08-10T10:09:26.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

