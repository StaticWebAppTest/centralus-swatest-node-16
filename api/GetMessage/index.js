module.exports = async function (context, req) {
  const date = "2022-03-03T14:15:27.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

