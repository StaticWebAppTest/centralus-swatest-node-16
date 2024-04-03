module.exports = async function (context, req) {
  const date = "2024-04-03T13:11:20.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

