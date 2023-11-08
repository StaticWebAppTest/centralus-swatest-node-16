module.exports = async function (context, req) {
  const date = "2023-11-08T07:08:19.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

