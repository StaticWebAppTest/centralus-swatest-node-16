module.exports = async function (context, req) {
  const date = "2024-10-03T13:20:10.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

