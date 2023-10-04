module.exports = async function (context, req) {
  const date = "2023-10-04T23:08:48.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

