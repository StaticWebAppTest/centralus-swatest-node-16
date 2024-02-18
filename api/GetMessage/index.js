module.exports = async function (context, req) {
  const date = "2024-02-18T17:07:08.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

