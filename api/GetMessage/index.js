module.exports = async function (context, req) {
  const date = "2024-02-09T05:08:32.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

