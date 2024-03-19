module.exports = async function (context, req) {
  const date = "2024-03-19T18:11:18.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

