module.exports = async function (context, req) {
  const date = "2022-03-19T23:09:57.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

