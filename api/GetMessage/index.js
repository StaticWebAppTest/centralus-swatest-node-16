module.exports = async function (context, req) {
  const date = "2023-10-16T07:08:48.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

