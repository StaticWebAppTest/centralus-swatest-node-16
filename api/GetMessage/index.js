module.exports = async function (context, req) {
  const date = "2024-05-12T05:10:22.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

