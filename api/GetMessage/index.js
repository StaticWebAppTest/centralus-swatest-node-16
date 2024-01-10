module.exports = async function (context, req) {
  const date = "2024-01-10T07:09:02.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

