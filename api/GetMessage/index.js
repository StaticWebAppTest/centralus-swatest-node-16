module.exports = async function (context, req) {
  const date = "2023-06-19T08:12:22.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

