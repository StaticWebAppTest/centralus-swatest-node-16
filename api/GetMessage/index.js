module.exports = async function (context, req) {
  const date = "2023-10-16T17:08:06.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

