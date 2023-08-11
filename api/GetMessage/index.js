module.exports = async function (context, req) {
  const date = "2023-08-11T15:08:38.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

