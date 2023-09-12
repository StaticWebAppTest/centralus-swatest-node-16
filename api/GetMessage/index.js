module.exports = async function (context, req) {
  const date = "2023-09-12T10:09:31.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

