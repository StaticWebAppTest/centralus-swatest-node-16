module.exports = async function (context, req) {
  const date = "2022-07-11T18:15:59.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

