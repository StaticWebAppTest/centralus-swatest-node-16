module.exports = async function (context, req) {
  const date = "2024-09-16T11:10:20.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

