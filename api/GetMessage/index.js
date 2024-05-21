module.exports = async function (context, req) {
  const date = "2024-05-21T02:23:32.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

