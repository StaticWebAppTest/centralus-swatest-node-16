module.exports = async function (context, req) {
  const date = "2024-05-28T03:10:52.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

