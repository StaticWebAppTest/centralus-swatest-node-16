module.exports = async function (context, req) {
  const date = "2025-04-11T17:11:21.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

