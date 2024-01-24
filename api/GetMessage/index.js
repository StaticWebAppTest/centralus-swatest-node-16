module.exports = async function (context, req) {
  const date = "2024-01-24T06:13:10.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

