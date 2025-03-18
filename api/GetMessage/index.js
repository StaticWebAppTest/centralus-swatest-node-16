module.exports = async function (context, req) {
  const date = "2025-03-18T12:24:39.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

