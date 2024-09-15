module.exports = async function (context, req) {
  const date = "2024-09-15T18:14:51.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

