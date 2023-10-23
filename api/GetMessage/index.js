module.exports = async function (context, req) {
  const date = "2023-10-23T23:08:34.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

