module.exports = async function (context, req) {
  const date = "2022-10-19T16:23:31.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

