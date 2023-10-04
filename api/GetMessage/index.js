module.exports = async function (context, req) {
  const date = "2023-10-04T20:09:32.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

