module.exports = async function (context, req) {
  const date = "2023-10-21T10:08:07.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

