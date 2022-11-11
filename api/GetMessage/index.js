module.exports = async function (context, req) {
  const date = "2022-11-11T16:15:28.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

