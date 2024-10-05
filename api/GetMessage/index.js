module.exports = async function (context, req) {
  const date = "2024-10-05T23:10:56.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

