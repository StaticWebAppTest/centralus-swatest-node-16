module.exports = async function (context, req) {
  const date = "2024-04-04T17:07:43.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

