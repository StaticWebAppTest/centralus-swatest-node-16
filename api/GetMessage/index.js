module.exports = async function (context, req) {
  const date = "2022-10-11T22:13:21.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

