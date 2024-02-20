module.exports = async function (context, req) {
  const date = "2024-02-20T16:11:23.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

