module.exports = async function (context, req) {
  const date = "2024-06-24T13:12:05.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

