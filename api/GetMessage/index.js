module.exports = async function (context, req) {
  const date = "2022-10-16T17:22:05.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

