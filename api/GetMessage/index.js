module.exports = async function (context, req) {
  const date = "2024-03-13T13:09:00.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

