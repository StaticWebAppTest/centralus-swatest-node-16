module.exports = async function (context, req) {
  const date = "2022-10-27T07:11:32.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

