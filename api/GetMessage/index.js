module.exports = async function (context, req) {
  const date = "2024-09-23T20:13:12.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

