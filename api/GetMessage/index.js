module.exports = async function (context, req) {
  const date = "2023-12-01T18:11:45.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

