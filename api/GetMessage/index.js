module.exports = async function (context, req) {
  const date = "2022-05-15T05:14:26.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

