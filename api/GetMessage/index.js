module.exports = async function (context, req) {
  const date = "2025-03-13T11:11:00.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

