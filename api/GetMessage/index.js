module.exports = async function (context, req) {
  const date = "2024-11-16T16:14:00.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

