module.exports = async function (context, req) {
  const date = "2024-05-13T04:12:52.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

