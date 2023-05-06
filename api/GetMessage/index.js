module.exports = async function (context, req) {
  const date = "2023-05-06T13:08:45.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

