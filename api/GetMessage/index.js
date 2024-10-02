module.exports = async function (context, req) {
  const date = "2024-10-02T10:12:30.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

