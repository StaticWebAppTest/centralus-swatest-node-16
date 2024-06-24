module.exports = async function (context, req) {
  const date = "2024-06-24T02:32:57.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

