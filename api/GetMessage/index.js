module.exports = async function (context, req) {
  const date = "2023-02-04T15:08:43.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

