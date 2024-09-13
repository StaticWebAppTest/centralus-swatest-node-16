module.exports = async function (context, req) {
  const date = "2024-09-13T06:16:10.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

