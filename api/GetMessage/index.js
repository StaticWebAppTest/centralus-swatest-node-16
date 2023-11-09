module.exports = async function (context, req) {
  const date = "2023-11-09T23:09:03.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

