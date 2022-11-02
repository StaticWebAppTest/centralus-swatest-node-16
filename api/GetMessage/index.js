module.exports = async function (context, req) {
  const date = "2022-11-02T13:45:44.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

