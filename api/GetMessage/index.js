module.exports = async function (context, req) {
  const date = "2024-06-18T10:10:42.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

