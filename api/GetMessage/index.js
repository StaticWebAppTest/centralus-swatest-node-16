module.exports = async function (context, req) {
  const date = "2023-10-11T17:08:10.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

