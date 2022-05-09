module.exports = async function (context, req) {
  const date = "2022-05-09T17:19:54.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

