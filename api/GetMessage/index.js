module.exports = async function (context, req) {
  const date = "2024-05-23T08:12:44.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

