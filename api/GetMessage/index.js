module.exports = async function (context, req) {
  const date = "2023-02-20T19:07:44.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

