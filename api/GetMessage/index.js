module.exports = async function (context, req) {
  const date = "2024-05-13T09:10:30.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

