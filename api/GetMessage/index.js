module.exports = async function (context, req) {
  const date = "2024-08-28T13:16:21.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

