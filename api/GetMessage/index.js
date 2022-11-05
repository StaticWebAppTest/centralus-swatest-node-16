module.exports = async function (context, req) {
  const date = "2022-11-05T06:14:07.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

