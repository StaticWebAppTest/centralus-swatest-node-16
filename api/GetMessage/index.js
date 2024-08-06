module.exports = async function (context, req) {
  const date = "2024-08-06T11:09:15.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

