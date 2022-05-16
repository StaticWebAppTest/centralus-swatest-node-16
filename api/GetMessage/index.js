module.exports = async function (context, req) {
  const date = "2022-05-16T06:16:37.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

