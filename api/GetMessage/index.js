module.exports = async function (context, req) {
  const date = "2024-08-27T11:10:04.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

