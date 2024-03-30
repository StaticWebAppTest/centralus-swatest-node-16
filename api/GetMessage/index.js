module.exports = async function (context, req) {
  const date = "2024-03-30T18:12:10.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

