module.exports = async function (context, req) {
  const date = "2024-11-10T04:13:25.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

