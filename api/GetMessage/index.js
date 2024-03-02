module.exports = async function (context, req) {
  const date = "2024-03-02T04:10:32.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

