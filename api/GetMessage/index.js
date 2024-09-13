module.exports = async function (context, req) {
  const date = "2024-09-13T17:10:25.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

