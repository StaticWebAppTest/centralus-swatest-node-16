module.exports = async function (context, req) {
  const date = "2022-11-03T19:08:57.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

