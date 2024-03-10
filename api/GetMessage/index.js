module.exports = async function (context, req) {
  const date = "2024-03-10T04:10:29.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

