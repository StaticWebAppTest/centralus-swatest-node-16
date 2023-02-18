module.exports = async function (context, req) {
  const date = "2023-02-18T11:08:42.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

