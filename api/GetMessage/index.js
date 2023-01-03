module.exports = async function (context, req) {
  const date = "2023-01-03T18:11:40.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

