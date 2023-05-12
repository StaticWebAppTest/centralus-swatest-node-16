module.exports = async function (context, req) {
  const date = "2023-05-12T20:08:43.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

