module.exports = async function (context, req) {
  const date = "2024-09-12T13:18:18.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

