module.exports = async function (context, req) {
  const date = "2024-03-30T19:07:28.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

