module.exports = async function (context, req) {
  const date = "2024-04-10T07:10:35.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

