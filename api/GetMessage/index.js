module.exports = async function (context, req) {
  const date = "2023-06-10T04:10:00.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

