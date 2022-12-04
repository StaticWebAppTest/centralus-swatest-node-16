module.exports = async function (context, req) {
  const date = "2022-12-04T15:09:16.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

