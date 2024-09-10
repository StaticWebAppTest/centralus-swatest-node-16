module.exports = async function (context, req) {
  const date = "2024-09-10T21:10:45.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

