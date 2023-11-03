module.exports = async function (context, req) {
  const date = "2023-11-03T17:08:07.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

