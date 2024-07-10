module.exports = async function (context, req) {
  const date = "2024-07-10T08:15:02.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

