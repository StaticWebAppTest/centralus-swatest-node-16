module.exports = async function (context, req) {
  const date = "2023-02-01T03:19:22.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

