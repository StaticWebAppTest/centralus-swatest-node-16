module.exports = async function (context, req) {
  const date = "2024-07-20T08:12:12.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

