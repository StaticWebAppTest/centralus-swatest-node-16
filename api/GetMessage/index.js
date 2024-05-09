module.exports = async function (context, req) {
  const date = "2024-05-09T17:08:44.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

