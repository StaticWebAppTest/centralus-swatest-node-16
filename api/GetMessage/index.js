module.exports = async function (context, req) {
  const date = "2022-10-28T04:39:48.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

