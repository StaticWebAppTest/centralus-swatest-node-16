module.exports = async function (context, req) {
  const date = "2024-09-08T12:19:06.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

