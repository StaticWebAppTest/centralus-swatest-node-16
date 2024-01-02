module.exports = async function (context, req) {
  const date = "2024-01-02T06:12:18.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

