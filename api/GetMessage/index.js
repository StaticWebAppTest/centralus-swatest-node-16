module.exports = async function (context, req) {
  const date = "2024-04-22T11:07:40.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

