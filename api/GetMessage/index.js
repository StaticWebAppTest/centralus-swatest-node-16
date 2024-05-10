module.exports = async function (context, req) {
  const date = "2024-05-10T17:08:19.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

