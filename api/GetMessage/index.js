module.exports = async function (context, req) {
  const date = "2023-05-11T16:11:12.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

