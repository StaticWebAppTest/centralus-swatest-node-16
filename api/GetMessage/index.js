module.exports = async function (context, req) {
  const date = "2024-06-10T11:09:28.353Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

