module.exports = async function (context, req) {
  const date = "2024-06-28T05:10:06.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

