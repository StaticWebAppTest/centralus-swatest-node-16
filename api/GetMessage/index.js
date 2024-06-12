module.exports = async function (context, req) {
  const date = "2024-06-12T08:13:08.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

