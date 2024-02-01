module.exports = async function (context, req) {
  const date = "2024-02-01T06:12:07.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

