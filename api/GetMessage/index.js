module.exports = async function (context, req) {
  const date = "2024-06-10T18:13:25.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

