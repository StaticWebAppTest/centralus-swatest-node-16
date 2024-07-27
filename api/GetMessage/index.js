module.exports = async function (context, req) {
  const date = "2024-07-27T18:13:51.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

