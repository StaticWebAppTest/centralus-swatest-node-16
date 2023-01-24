module.exports = async function (context, req) {
  const date = "2023-01-24T06:12:00.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

