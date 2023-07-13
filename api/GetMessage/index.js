module.exports = async function (context, req) {
  const date = "2023-07-13T14:08:54.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

