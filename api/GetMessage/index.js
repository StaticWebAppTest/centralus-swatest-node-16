module.exports = async function (context, req) {
  const date = "2023-07-12T18:12:27.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

