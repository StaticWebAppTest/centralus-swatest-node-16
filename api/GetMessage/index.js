module.exports = async function (context, req) {
  const date = "2024-02-17T06:11:24.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

