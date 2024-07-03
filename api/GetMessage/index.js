module.exports = async function (context, req) {
  const date = "2024-07-03T09:11:20.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

