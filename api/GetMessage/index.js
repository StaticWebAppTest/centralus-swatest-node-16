module.exports = async function (context, req) {
  const date = "2023-05-11T20:08:54.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

