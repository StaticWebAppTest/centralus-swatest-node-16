module.exports = async function (context, req) {
  const date = "2024-02-18T11:06:42.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

