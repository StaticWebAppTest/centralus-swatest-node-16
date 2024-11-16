module.exports = async function (context, req) {
  const date = "2024-11-16T15:10:51.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

