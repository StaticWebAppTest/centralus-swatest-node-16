module.exports = async function (context, req) {
  const date = "2024-06-13T11:09:30.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

