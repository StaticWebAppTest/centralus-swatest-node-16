module.exports = async function (context, req) {
  const date = "2023-11-09T15:09:09.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

