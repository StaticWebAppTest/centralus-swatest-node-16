module.exports = async function (context, req) {
  const date = "2023-03-28T20:10:11.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

