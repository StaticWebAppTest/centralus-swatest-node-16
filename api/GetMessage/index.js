module.exports = async function (context, req) {
  const date = "2023-03-10T20:10:11.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

