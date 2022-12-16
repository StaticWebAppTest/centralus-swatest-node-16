module.exports = async function (context, req) {
  const date = "2022-12-16T17:08:59.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

