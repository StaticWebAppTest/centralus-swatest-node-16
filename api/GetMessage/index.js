module.exports = async function (context, req) {
  const date = "2024-02-13T04:10:40.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

