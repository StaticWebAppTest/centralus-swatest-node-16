module.exports = async function (context, req) {
  const date = "2024-06-10T06:15:30.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

