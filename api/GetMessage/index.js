module.exports = async function (context, req) {
  const date = "2023-12-27T11:07:50.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

