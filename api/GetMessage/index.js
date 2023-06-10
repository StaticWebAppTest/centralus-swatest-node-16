module.exports = async function (context, req) {
  const date = "2023-06-10T02:14:00.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

