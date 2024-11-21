module.exports = async function (context, req) {
  const date = "2024-11-21T14:11:49.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

