module.exports = async function (context, req) {
  const date = "2024-05-13T05:10:45.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

