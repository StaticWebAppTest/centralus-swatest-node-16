module.exports = async function (context, req) {
  const date = "2024-09-12T05:11:32.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

