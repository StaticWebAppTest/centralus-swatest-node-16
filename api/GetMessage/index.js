module.exports = async function (context, req) {
  const date = "2024-08-14T19:10:21.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

