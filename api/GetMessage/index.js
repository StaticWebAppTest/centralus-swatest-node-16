module.exports = async function (context, req) {
  const date = "2024-06-25T12:18:40.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

