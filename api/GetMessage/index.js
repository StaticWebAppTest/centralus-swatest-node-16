module.exports = async function (context, req) {
  const date = "2024-11-28T11:10:28.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

