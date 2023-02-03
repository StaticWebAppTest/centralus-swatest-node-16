module.exports = async function (context, req) {
  const date = "2023-02-03T15:09:55.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

