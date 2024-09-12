module.exports = async function (context, req) {
  const date = "2024-09-12T14:11:25.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

