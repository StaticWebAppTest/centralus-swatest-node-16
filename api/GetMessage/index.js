module.exports = async function (context, req) {
  const date = "2024-03-28T03:09:40.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

