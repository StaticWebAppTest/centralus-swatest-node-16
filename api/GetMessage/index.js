module.exports = async function (context, req) {
  const date = "2024-04-10T13:10:18.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

