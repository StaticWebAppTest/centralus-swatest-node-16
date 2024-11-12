module.exports = async function (context, req) {
  const date = "2024-11-12T15:12:27.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

