module.exports = async function (context, req) {
  const date = "2023-05-12T07:08:06.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

