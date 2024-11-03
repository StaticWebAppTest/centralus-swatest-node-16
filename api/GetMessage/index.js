module.exports = async function (context, req) {
  const date = "2024-11-03T08:13:45.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

