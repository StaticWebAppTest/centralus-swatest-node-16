module.exports = async function (context, req) {
  const date = "2024-04-16T11:07:50.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

