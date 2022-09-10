module.exports = async function (context, req) {
  const date = "2022-09-10T18:14:34.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

