module.exports = async function (context, req) {
  const date = "2024-07-27T15:09:54.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

