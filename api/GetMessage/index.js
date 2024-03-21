module.exports = async function (context, req) {
  const date = "2024-03-21T15:10:13.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

