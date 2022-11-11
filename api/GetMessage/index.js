module.exports = async function (context, req) {
  const date = "2022-11-11T14:12:47.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

