module.exports = async function (context, req) {
  const date = "2024-09-20T06:16:25.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

