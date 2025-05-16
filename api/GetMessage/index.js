module.exports = async function (context, req) {
  const date = "2025-05-16T15:12:25.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

