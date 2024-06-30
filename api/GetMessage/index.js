module.exports = async function (context, req) {
  const date = "2024-06-30T06:13:19.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

