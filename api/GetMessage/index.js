module.exports = async function (context, req) {
  const date = "2022-03-26T05:09:15.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

