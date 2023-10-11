module.exports = async function (context, req) {
  const date = "2023-10-11T20:09:27.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

