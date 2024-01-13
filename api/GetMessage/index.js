module.exports = async function (context, req) {
  const date = "2024-01-13T13:09:52.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

