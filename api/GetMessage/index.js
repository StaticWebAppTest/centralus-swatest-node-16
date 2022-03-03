module.exports = async function (context, req) {
  const date = "2022-03-03T09:11:54.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

