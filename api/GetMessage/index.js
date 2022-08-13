module.exports = async function (context, req) {
  const date = "2022-08-13T20:11:21.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

