module.exports = async function (context, req) {
  const date = "2022-10-05T06:29:57.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

