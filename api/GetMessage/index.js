module.exports = async function (context, req) {
  const date = "2024-01-10T13:11:50.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

