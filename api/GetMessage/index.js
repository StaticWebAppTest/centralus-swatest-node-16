module.exports = async function (context, req) {
  const date = "2023-01-10T23:09:28.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

