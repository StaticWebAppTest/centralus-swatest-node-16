module.exports = async function (context, req) {
  const date = "2023-05-08T20:08:57.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

