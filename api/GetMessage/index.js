module.exports = async function (context, req) {
  const date = "2024-03-03T18:10:20.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

