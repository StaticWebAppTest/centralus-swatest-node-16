module.exports = async function (context, req) {
  const date = "2022-12-03T21:08:04.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

