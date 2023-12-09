module.exports = async function (context, req) {
  const date = "2023-12-09T08:11:05.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

