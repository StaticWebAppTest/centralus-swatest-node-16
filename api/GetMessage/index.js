module.exports = async function (context, req) {
  const date = "2023-05-14T20:08:27.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

