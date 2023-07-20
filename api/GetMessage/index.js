module.exports = async function (context, req) {
  const date = "2023-07-20T08:11:26.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

