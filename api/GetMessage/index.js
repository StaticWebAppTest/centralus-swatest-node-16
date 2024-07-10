module.exports = async function (context, req) {
  const date = "2024-07-10T16:12:25.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

