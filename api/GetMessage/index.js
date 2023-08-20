module.exports = async function (context, req) {
  const date = "2023-08-20T10:07:44.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

