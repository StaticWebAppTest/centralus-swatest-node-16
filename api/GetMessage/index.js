module.exports = async function (context, req) {
  const date = "2023-11-01T07:08:46.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

