module.exports = async function (context, req) {
  const date = "2023-09-30T07:07:19.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

