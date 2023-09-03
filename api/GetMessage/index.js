module.exports = async function (context, req) {
  const date = "2023-09-03T23:08:06.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

