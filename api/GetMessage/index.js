module.exports = async function (context, req) {
  const date = "2023-09-18T14:08:45.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

