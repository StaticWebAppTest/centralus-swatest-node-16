module.exports = async function (context, req) {
  const date = "2024-10-05T20:11:19.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

