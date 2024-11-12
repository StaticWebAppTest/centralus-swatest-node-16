module.exports = async function (context, req) {
  const date = "2024-11-12T17:10:16.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

