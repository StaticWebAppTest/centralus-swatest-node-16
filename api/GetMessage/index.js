module.exports = async function (context, req) {
  const date = "2023-06-09T06:11:57.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

