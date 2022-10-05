module.exports = async function (context, req) {
  const date = "2022-10-05T16:37:35.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

