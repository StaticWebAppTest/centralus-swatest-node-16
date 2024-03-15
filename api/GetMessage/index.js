module.exports = async function (context, req) {
  const date = "2024-03-15T06:12:09.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

