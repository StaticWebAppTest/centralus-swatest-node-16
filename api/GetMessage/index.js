module.exports = async function (context, req) {
  const date = "2023-10-19T18:11:37.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

