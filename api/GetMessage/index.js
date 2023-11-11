module.exports = async function (context, req) {
  const date = "2023-11-11T15:08:01.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

