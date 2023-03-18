module.exports = async function (context, req) {
  const date = "2023-03-18T13:13:09.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

