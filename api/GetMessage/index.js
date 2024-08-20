module.exports = async function (context, req) {
  const date = "2024-08-20T11:10:50.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

