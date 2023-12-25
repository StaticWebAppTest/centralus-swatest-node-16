module.exports = async function (context, req) {
  const date = "2023-12-25T06:12:43.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

