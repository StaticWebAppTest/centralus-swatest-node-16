module.exports = async function (context, req) {
  const date = "2024-07-13T08:12:00.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

