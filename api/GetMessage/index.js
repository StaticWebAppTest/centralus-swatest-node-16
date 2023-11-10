module.exports = async function (context, req) {
  const date = "2023-11-10T23:08:19.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

