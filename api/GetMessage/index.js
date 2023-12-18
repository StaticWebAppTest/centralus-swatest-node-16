module.exports = async function (context, req) {
  const date = "2023-12-18T23:09:00.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

