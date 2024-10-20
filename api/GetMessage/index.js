module.exports = async function (context, req) {
  const date = "2024-10-20T18:14:14.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

