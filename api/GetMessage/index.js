module.exports = async function (context, req) {
  const date = "2023-12-03T09:08:10.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

