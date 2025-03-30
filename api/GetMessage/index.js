module.exports = async function (context, req) {
  const date = "2025-03-30T23:12:23.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

