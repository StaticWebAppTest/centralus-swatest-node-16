module.exports = async function (context, req) {
  const date = "2023-07-19T18:11:22.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

