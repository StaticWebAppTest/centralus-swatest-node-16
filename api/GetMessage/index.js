module.exports = async function (context, req) {
  const date = "2022-11-23T16:14:06.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

