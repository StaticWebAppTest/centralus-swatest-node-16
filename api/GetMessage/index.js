module.exports = async function (context, req) {
  const date = "2023-09-01T07:08:16.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

