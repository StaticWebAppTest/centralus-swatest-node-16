module.exports = async function (context, req) {
  const date = "2024-04-09T18:11:18.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

