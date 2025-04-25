module.exports = async function (context, req) {
  const date = "2025-04-25T05:13:20.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

